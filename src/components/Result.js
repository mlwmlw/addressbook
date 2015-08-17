import React, {Component} from 'react';

export default class Result extends Component {
  render() {
    const data = this.props.data || [];
    if(data.length == 0) {
      return <div />;
    }
    let result = data.map(row => {
      return (
        <div className="ui center aligned grid">
          <div className="ui ten wide column list">
            <div className="ui two connected items fluid containbox">
              <div className="ui aligned grid">
                <div className="four wide column">
                  <div className="item">
                    <div className="image">
                      <div className="photobox" />
                    </div>
                    <div className="content">
                      {row.name}
                    </div>
                  </div>
                </div>
                <div className="twelve wide column">
                  <div className="ui list">
                    <div className="item">
                      <div className="phone"><i className="circular icon phone" /><span>{row.phone}</span></div>
                      <div className="fax"><i className="circular icon laptop" /><span>{row.fax}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="ui content">
        <h3 className="ui result_list" />
        {result}
      </div>    
    );
  }
}

