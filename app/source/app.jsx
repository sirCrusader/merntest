/**
 * Created by wizard on 7/20/17.
 */

const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a filter.</div>
        );
    }
}

class IssueRow extends React.Component {
    static get propTypes() {
        return {
            issue_id: React.PropTypes.number.isRequired,
            issue_title: React.PropTypes.string
        };
    }

    static get defaultProps() {
        return {
            issue_title: '-- no title --'
        }
    }

    render() {
        const borderedStyle = {border: "1px solid silver", padding: 4};
        return (
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.children}</td>
            </tr>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 6};
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <td style={borderedStyle}>Id</td>
                        <td style={borderedStyle}>Title</td>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1}>Error in console when clicking Add</IssueRow>
                    <IssueRow issue_id={2}>Missing bottom <b>border</b> on panel</IssueRow>
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
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr />
                <IssueTable/>
                <hr />
                <IssueAdd/>
            </div>
        );
    }
}

ReactDOM.render(<IssueList/>, contentNode);