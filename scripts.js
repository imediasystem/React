var UserTable = React.createClass({
    render: function() {
        return (
            <div className="userTable">
                <UserSearchBar />
                <UserList />
            </div>
        );
    }
});

var UserSearchBar = React.createClass({
    render: function() {
        return (
            <div className="card userSearch">
				<form className="form-inline">
					<div className="form-group">
						<input type="search" className="form-control" aria-label="userSearch" />
						<button type="submit" className="btn btn-default">Szukaj</button>
					</div>
				</form>
			</div>
        );
    }
});

var UserList = React.createClass({
    render: function() {
        return (
            <div className="userList">
                <UserRow1 />
                <UserRow2 />
                <UserRow3 />
            </div>
        );
    }
});

var UserRow1 = React.createClass({
    render: function() {
        return (
            <div className="card userRow">
				<div className="row">
					<div className="userRowLeft col-xs-2">
						<img src="img/Foto-150.jpg" alt="avatar" className="img-responsive"/>
					</div>
					<div className="userRowRight col-xs-10">
						<h4>User 1</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
							<div className="userRowActions">
								<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
							</div>
					</div>
                </div>
            </div>
        );
    }
});

var UserRow2 = React.createClass({
    render: function() {
        return (
            <div className="card userRow">
				<div className="row">
					<div className="userRowLeft col-xs-2">
						<img src="img/aiden_pearce_face_150_white.jpg" alt="avatar" className="img-responsive"/>
					</div>
					<div className="userRowRight col-xs-10">
						<h4>User 2</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
							<div className="userRowActions">
								<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
							</div>
					</div>
                </div>
            </div>
        );
    }
});

var UserRow3 = React.createClass({
    render: function() {
        return (
            <div className="card userRow">
				<div className="row">
					<div className="userRowLeft col-xs-2">
						<img src="img/Foto_Square_150.jpg" alt="avatar" className="img-responsive"/>
					</div>
					<div className="userRowRight col-xs-10">
						<h4>User 3</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
							<div className="userRowActions">
								<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
								<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
							</div>
					</div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<UserTable/>, document.getElementById('content'));