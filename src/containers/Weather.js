import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherInfo } from '../redux/actions';
import { 
    LOADING,
    SUCCESS,
    FAIL 
} from '../redux/actionTypes';

class SelectCity extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityCode: '101020100'
        }
    }
    componentDidMount(){
        this.props.selectCity(101020100);
    }
    
    weather = (weather) => {
        if(weather&&weather.status){
            switch(weather.status){
                case LOADING:
                    return <div className="weather-info">正在获取天气信息...</div>
                case SUCCESS:
                    return <div className="weather-info">{weather.weather.wea} {weather.weather.win} {weather.weather.win_speed} {weather.weather.tem_night}℃ ~ {weather.weather.tem_day}℃</div>
                case FAIL: 
                    return <div className="weather-info">获取天气失败</div>
                default: 
                    return <div className="weather-info">暂无天气数据</div>
            }
        }else{
            return <div>暂无天气数据</div>
        }

    }

    changeCity = (e) => {
        let cityCode = e.target.value;
        this.setState({
            cityCode
        })
        this.props.selectCity(cityCode)
    }

    render() {
        const weather = this.weather(this.props.weather);
        let cityCode = this.state.cityCode;
        return (
            <div>
                { weather }
                <select value={cityCode} onChange={this.changeCity}>
                    <option value="101020100">上海</option>
                    <option value="101010100">北京</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    weather: state.weatherInfo
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectCity: (cityCode) => {
            dispatch(getWeatherInfo(cityCode));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectCity);
