import React from 'react';
class ClassPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
    }

    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className='user-card'>
                <h1>Count : {count}</h1>
                <button onClick={() => {
                    this.state({
                        count: this.state.count + 1,
                    });
                }}>Count Increases</button>
                <h3>{name}</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}

export default ClassPage;