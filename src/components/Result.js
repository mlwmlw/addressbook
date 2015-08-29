import React, {Component} from 'react';

export default class Result extends Component {
  render() {

    const data = this.props.data;
    let result;
    if(data === null) {
      return <div />;
    }
    else if(data === '') {
      result = (<div class="ui segment">
        <div className="ui active dimmer">
          <div className="ui large text loader">搜尋中請稍後...</div>
        </div>
      </div>);
    }
    else if(data.length == 0) {
      result = (
        <div className="ui error message">
          <div className="header">
            查無資料喔！
          </div>
        </div>
      );
    }
    else {
      let items = data.map(row => {
        return (
          <div className="item row">
            <h3 className="ui small image icon center aligned header">
              <div className="photobox" style={row.image ? {backgroundImage: 'url(' + row.image + ')', backgroundSize: '95px', backgroundPosition: '-5px 0px'}: {}} />
              <b>{row.name}</b>
            </h3>
            <div className="middle aligned content">
              <div className="ui list">
                <div className="item">
                  <div className="phone"><i className="circular icon phone" /><span>{row.phone || '02 1234-5678'}</span></div>
                  <div className="fax"><i className="circular icon fax" /><span>{row.fax || '02 2234-5678'}</span></div>
                </div>
              </div>
              <div className="extra">
                <div className="ui right floated button">
                  <a target="_blank" href={row.html_url}>詳細內容</a>
                </div>
              </div>
            </div>
          </div>
        )
        /*
          <div className="ui ten wide list">
              <div className="ui two connected items fluid containbox">
                <div className="ui aligned grid">
                  <div className="four wide column">
                    <div className="item">
                      <div className="image">
                        <div className="photobox" style={row.image ? {backgroundImage: 'url(' + row.image + ')', backgroundSize: '95px', backgroundPosition: '-5px 0px'}: {}}/>
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

        */
      });
      result = (<div className="ui divided items column">{items}</div>)
    }
    return (
      <div className="ui two column centered grid">
        <h3 className="ui result_list" />
        {result}
      </div>    
    );
  }
}

