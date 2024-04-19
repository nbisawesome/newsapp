const ErrorComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    <h1 className="display-4">404</h1>
                    <p className="lead">Page Not Found</p>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorComponent;