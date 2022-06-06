import "./MainContainer.scss";
export const MainContainer = ({ leftchild, mainchild, rightchild }) => {
    return (
        <div className="main-container flex flex-col">
            <div className="main__wrapper p-1">
                <div className="left__wrapper">
                    {leftchild}
                </div>
                <div className="content__wrapper">
                    {mainchild}
                </div>
                <div className="right__wrapper p-0-75">
                    {rightchild}
                </div>
            </div>
        </div>
    )
}