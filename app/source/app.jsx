/**
 * Created by wizard on 7/20/17.
 */

import IssueAdd from './IssueAdd.jsx';
const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a filter.</div>
        );
    }
}

const IssueRow = (props) => (
    <tr>
        <th>{props.issue._id}</th>
        <th>{props.issue.status}</th>
        <th>{props.issue.owner}</th>
        <th>{props.issue.created ? props.issue.created.toDateString() : ''}</th>
        <th>{props.issue.effort}</th>
        <th>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</th>
        <th>{props.issue.title}</th>
    </tr>
)

function IssueTable(props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)
    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completion Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {issueRows}
            </tbody>
        </table>
    );
}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };

        this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch('/api/issues').then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        console.log("Total count of records: ", data._metadata.total_count);
                        data.records.forEach(issue => {
                            issue.created = new Date(issue.created);
                            if (issue.completionDate) {
                                issue.completionDate = new Date(issue.completionDate);
                            }
                        });
                        this.setState({issues: data.records});
                    });
                } else {
                    response.json().then(error => {
                        alert("Failed to fetch issues: " + error.message);
                    });
                }
            }).catch(err => {
                alert("Error in fetching data from server: ", err);
            });
    }

    createIssue(newIssue) {
        fetch('/api/issues', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIssue),
        }).then(response => {
            if (response.ok) {
                response.json().then(updatedIssue => {
                    updatedIssue.created = new Date(updatedIssue.created);
                    if (updatedIssue.completionDate) {
                        updatedIssue.completionDate = new Date(updatedIssue.completionDate);
                    }
                    const newIssues = this.state.issues.concat(updatedIssue);
                    this.setState({ issues: newIssues });
                });
            } else {
                response.json().then(error => {
                    console.log("Failed to add issue: " + error.message);
                })
            }
        }).catch(err => {
            console.log("Error in sending data to server: " + err.message);
        });
    }

    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </div>
        );
    }
}

ReactDOM.render(<IssueList/>, contentNode);