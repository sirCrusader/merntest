/**
 * Created by wizard on 7/20/17.
 */

const contentNode = document.getElementById('contents');
const issues = [
    {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add'
    },{
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel'
    }
];

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a filter.</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <th>{issue.id}</th>
                <th>{issue.status}</th>
                <th>{issue.owner}</th>
                <th>{issue.created.toDateString()}</th>
                <th>{issue.effort}</th>
                <th>{issue.completionDate ? issue.completionDate.toDateString() : ''}</th>
                <th>{issue.title}</th>
            </tr>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
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
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a issue creating form.</div>
        );
    }
}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };

        this.createTestIssue = this.createTestIssue.bind(this);
        setTimeout(this.createTestIssue, 2000);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({ issues: issues });
        }, 2000);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }

    createTestIssue() {
        this.createIssue({
            status: 'New', owner: 'Pieta', created: new Date(),
            title: 'Completion date should be optional',
        });
    }

    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr />
                <IssueTable issues={this.state.issues} />
                <button onClick={this.createTestIssue}>Add</button>
                <hr />
                <IssueAdd/>
            </div>
        );
    }
}

ReactDOM.render(<IssueList/>, contentNode);