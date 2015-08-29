import React, {Component} from 'react';

export default class Result extends Component {
  render() {
    const {people, total, page} = this.props.addressbook;
    let result;
    if(people === null) {
      return <div />;
    }
    else if(people === '') {
      result = (<div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui large text loader">搜尋中請稍後...</div>

        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>);
    }
    else if(people.length == 0) {
      result = (
        <div className="ui error message">
          <div className="header">
            查無資料喔！
          </div>
        </div>
      );
    }
    else {
      let items = people.map(row => {
        let membership = row.memberships.pop();
        return (
          <div className="item row">
            <h3 className="ui small image icon center aligned header">
              <div className="photobox" style={row.image ? {backgroundImage: 'url(' + row.image + ')', backgroundSize: '95px', backgroundPosition: '-5px 0px'}: {}} />
              <b>{row.name}</b>
              {() => {
                if(!membership)
                  return;
                switch(membership.party) {
                  case "人民第一黨": return (<div className="party party-pfp"/>);
                  case "民主進步黨": return (<div className="party party-dpp"/>);
                  case "中國國民黨": return (<div className="party party-kmp"/>);
                  case "台灣團結聯盟": return (<div className="party party-tsu"/>);
                  case "綠黨": return (<div className="party party-gpt"/>);
                  case "新黨": return (<div className="party party-np"/>);
                  default: return (<div className="party party-none"/>);
                }
              }()}
            </h3>
            <div className="middle aligned content">
              <div className="ui list">
                <div className="item">
                  <div className="phone"><i className="circular icon phone" /><span>{row.phone || '02 1234-5678'}</span></div>
                  <div className="fax"><i className="circular icon fax" /><span>{row.fax || '02 2234-5678'}</span></div>
                  { () => {
                    if(membership) 
                      return (
                        <div>
                          <div className="user"><i className="circular icon user" /><span>{membership.role}</span></div>
                          <div><i className="circular icon users" /><span>{membership.party}</span></div>
                          <div className="birthday"><i className="circular icon birthday" /><span>{membership.end_date}</span></div>
                          <div className="info"><i className="circular icon info" /><span>{membership.experience}</span></div>
                        </div>
                      );
                  }()}
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
      });
      var pager = () => {
        var a = [];
        for(var i = 0; i < Math.ceil(total/30); i++) {
          console.log(i)
          a.push(i + 1);
        }
        return a;
      }();
      result = (<div className="ui column">
          <h3 className="ui result_list" />
          <div className="ui divided items">{items}</div>
          <div className="ui pagination menu">
            { pager.map(function(el, i) {
                return (<a className={['item', page == el && 'active'].join(' ')}>{el}</a>)
              })}
          </div>
        </div>)
    }
    return (
      <div className="ui two column centered row">
        {result}
      </div>    
    );
  }
}

