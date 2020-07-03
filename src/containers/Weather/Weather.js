import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherInfo } from '../../redux/actions';
import { 
    LOADING,
    SUCCESS,
    FAIL 
} from '../../redux/actionTypes';
import styles from './Weather.module.scss';

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
                    return <span className={styles.weather_info}>正在获取天气信息...</span>
                case SUCCESS:
                    return <span className={styles.weather_info}>{weather.weather.wea} {weather.weather.win} {weather.weather.win_speed} {weather.weather.tem_night}℃ ~ {weather.weather.tem_day}℃</span>
                case FAIL: 
                    return <span className={styles.weather_info}>获取天气失败</span>
                default: 
                    return <span className={styles.weather_info}>暂无天气数据</span>
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
            <div className={styles.weather_box}>
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
