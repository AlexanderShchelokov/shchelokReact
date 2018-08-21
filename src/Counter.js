import React from 'react';


export default class Counter extends React.Component {
    constructor () {
        super();

        this.state = {
            count: 0,
            interval: 1000,
            step: 1000
        }
    }

    incCount = () => {
        this.setState({
            count:  this.state.count + 1
        })          
    }

    reset = () => {
        this.setState({
            count: 0,     
            interval: 1000,
            step: 1000          
        })
        clearInterval(this.timer);
    }

    startCounting = () => { 
        clearInterval(this.timer); 
        this.timer = setInterval(() => { 
            this.incCount() 
        },  
        this.state.interval) 
    }

    stopCounting = () => {
        clearInterval(this.timer);   
    }

    resetInterval = () => {
        this.stopCounting()
        this.startCounting()
    }

    editInterval = (oper) => {
        switch (oper) {
            case '+':
                this.setState({
                    interval: this.state.interval + this.state.step
                })
                this.resetInterval()               
                break;
            case '-':
                if (this.state.interval - this.state.step <= 0)
                    break
                this.setState({
                    interval: this.state.interval - this.state.step
                })
                this.resetInterval()               
                break;                
            default:
                break;
        }
    }

    render() {
        return (
           <div>
                <div>{this.state.count}</div>
                <button onClick={() => this.incCount()}>Увеличить на 1</button>
                <button onClick={() => this.reset()}>Сбросить</button>
                <button onClick={() => this.startCounting()}>Запустить счетчик</button>
                <button onClick={() => this.stopCounting()}>Остановить счетчик</button>
                <br></br>
                <div>Шаг {this.state.interval / 1000} секунд</div>
                <button onClick={() => this.editInterval('+')}>Увеличить интервал на {this.state.step / 1000} секунду</button>
                <button onClick={() => this.editInterval('-')}>Уменьшить интервал на {this.state.step / 1000} секунду</button>
                
          </div>
        );
    }


}