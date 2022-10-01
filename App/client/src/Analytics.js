import React, {useState, useEffect} from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RefreshButton from './components/RefreshButton';
import BarChartIcon from './components/BarChartIcon';
import LineChartIcon from './components/LineChartIcon';
import PieChartIcon from './components/PieChartIcon';
import {UserData} from './tempdata.js';
import useApiCall from './hooks/useApiCall';
import useAuthorize from './hooks/useAuthorize';
import useGetCookie from './hooks/useGetCookie';
import {useNavigate} from 'react-router-dom';
import './analytics.css'


const Analytics = () => {

    const apiCaller = useApiCall();
    const authorize = useAuthorize();
    const cookieFetcher = useGetCookie();
    const navigate = useNavigate();

    
    // console.log(a, b,  c);

    const [chartState, setChartState] = useState({
        chart1: 'null',
        chart2: 'null',
        chart3: 'null',
        
    });


    const [visitorData, setVisitorData] = useState();
    const [averageTime, setaverageTime] = useState();
    const [purchases, setPurchases] = useState();

    useEffect(() => {
        const authHandler = async() => {
            const isAuthorized = await authorize();
            if(!isAuthorized) navigate("/loginform");
        }
        authHandler();

        const getData = async() => {
            const response = await apiCaller({endpoint: 'analyticsdata', query: {domain: (cookieFetcher('domain')).data}}, {}, 'POST', 'application/json');
            setVisitorData({
                labels: response.data.map((data) => data.date),
                datasets: [
                {
                    label: "Visitors",
                    data: response.data.map((data) => data.visitors),
                    backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
                ],
            });

            setaverageTime({
                labels: response.data.map((data) => data.date),
                datasets: [
                {
                    label: "Average Time",
                    data: response.data.map((data) => data.averageTime),
                    backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
                ],
            });

            setPurchases({
                labels: response.data.map((data) => data.date),
                datasets: [
                {
                    label: "Purchases",
                    data: response.data.map((data) => data.purchasesMade),
                    backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
                ],
            })
            setChartState({
                chart1: 'bar',
                chart2: 'bar',
                chart3: 'bar',
                
            })
        }



        

        getData();


    }, [])

    const updateChartState = (chart, option) => {
        if(chart === 1){
            setChartState(prevState => {return {...prevState, chart1: option}});
        }else if(chart === 2){
            setChartState(prevState => {return {...prevState, chart2: option}});
        }else{
            setChartState(prevState => {return {...prevState, chart3: option}});
        }
    }
    


  return (
   <>
        <Navbar></Navbar>
        <div className='data-display'>
            <h1 style={{'fontSize': '3.2em', padding: '1em'}}>Analytics : </h1>
            <div>
                <span className='big'><b>Domain : </b> {(cookieFetcher('domain')).data}</span>
            </div>
            <RefreshButton/>
        </div>
        <div className="analytics">
            <section className='analytic-section'>
                <div className='options'>
                    <span className='option' onClick={() => updateChartState(1, 'bar')}><BarChartIcon/></span>
                    <span className='option' onClick={() => updateChartState(1, 'line')}><LineChartIcon/></span>
                    <span className='option' onClick={() => updateChartState(1, 'pie')}><PieChartIcon/></span>
                </div>
                <section className='analytic-visuals'>
                    <div className='analytic-descriptor'>
                    <h2>Visitors: </h2>
                    <p>A measure of the visitors the website had per day over a time period of a week</p>
                    <h5>Number of Visitors vs Day Plot</h5>
                    </div>
                    <div className="data-chart">
                        {chartState.chart1 === 'null' || (chartState.chart1 === 'bar' ? <BarChart chartData={visitorData}/> : (chartState.chart1 === 'line' ? <LineChart chartData={visitorData}/> : <PieChart chartData={visitorData}/>))}
                    </div>
                </section>

            </section>
            <section className='analytic-section'>
                <div className='options'>
                    <span className='option' onClick={() => updateChartState(2, 'bar')}><BarChartIcon/></span>
                    <span className='option' onClick={() => updateChartState(2, 'line')}><LineChartIcon/></span>
                    <span className='option' onClick={() => updateChartState(2, 'pie')}><PieChartIcon/></span>
                </div>
                <section className='analytic-visuals'>
                    <div className='analytic-descriptor'>
                    <h2>Average Time: </h2>
                    <p>A measure of how long visitors spent in the website had per day over a time period of a week</p>
                    <h5>Average Time vs Day Plot</h5>
                    </div>
                    <div className="data-chart">
                    { chartState.chart2 === 'null' || (chartState.chart2 === 'bar' ? <BarChart chartData={averageTime}/> : chartState.chart2 === 'line' ? <LineChart chartData={averageTime}/> : <PieChart chartData={averageTime}/>)}
                    </div>
                </section>

            </section>
            <section className='analytic-section'>
                <div className='options'>
                    <span className='option' onClick={() => updateChartState(3, 'bar')}><BarChartIcon/></span>
                    <span className='option' onClick={() => updateChartState(3, 'line')}><LineChartIcon/></span>
                    <span className='option' onClick={() => updateChartState(3, 'pie')}><PieChartIcon/></span>
                </div>
                <section className='analytic-visuals'>
                    <div className='analytic-descriptor'>
                    <h2>Purchases: </h2>
                    <p>A measure of how many purchases the website had per day over a time period of a week</p>
                    <h5>Number of Purchases vs Day Plot</h5>
                    </div>
                    <div className="data-chart">
                    {chartState.chart3 === 'null' || (chartState.chart3 === 'bar' ? <BarChart chartData={purchases}/> : chartState.chart3 === 'line' ? <LineChart chartData={purchases}/> : <PieChart chartData={purchases}/>)}
                    </div>
                </section>

            </section>
        
        </div>
            <Footer/>
   </>
  )
}

export default Analytics;
