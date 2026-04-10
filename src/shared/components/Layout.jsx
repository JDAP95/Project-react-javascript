import Header from "./Header";

const Layout = ({ title, children }) => {
    return (
        <div>
            <Header title={title} />
            <main>{children}</main>
        </div>
    );
};

export default Layout;

