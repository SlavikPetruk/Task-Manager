import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
            <div className="header__tabs">
            <Link to="/"><div className="header__tab"><img src="./media/tasks.png" alt="tasks" /><p>tasks</p></div></Link>
            <Link to="/calculator"><div className="header__tab"><img src="./media/calculator.png" alt="calculator" /><p>calculator</p></div></Link>
            <Link to="/stopwatch"><div className="header__tab"><img src="./media/stopwatch.png" alt="stopwatch" /><p>stopwatch</p></div></Link>
            <Link to="/weather"><div className="header__tab"><img src="./media/weather.png" alt="weather" /><p>weather</p></div></Link>
            <Link to="/currency"><div className="header__tab"><img src="./media/currencies.png" alt="currency" /><p>currencies</p></div></Link>
            </div>
            
            {/* <div className="header__button">
                <Link to="/">
                    <img src="./media/tasks.png" alt="tasks" />
                </Link>         
                <Link to="/calculator">
                    <img src="./media/calculator.png" alt="calculator" />
                </Link>
                <Link to="/stopwatch">
                    <img src="./media/stopwatch.png" alt="stopwatch" />
                </Link>
                <Link to="/weather">
                    <img src="./media/weather.png" alt="stopwatch" />
                </Link>
                <Link to="/currency">
                    <img src="./media/currencies.png" alt="currencies" />
                </Link>
            </div> */}
        </div>
    )
}

export default Header
