import React from 'react';
import { Badge,Table } from "react-bootstrap";



export default class Category extends React.Component{

  render(){
    const counts = this.props.counts;
    return(
<div id="category">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>categories</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Badge >{counts['d']}</Badge>&nbsp;dreams</td>
          </tr>
          <tr>
          <td><Badge>{counts['f']}</Badge>&nbsp;fantasies</td>
          </tr>
          <tr>
          <td><Badge>{counts['g']}</Badge>&nbsp;guilt</td>
          </tr>
          <tr>
          <td><Badge>{counts['l']}</Badge>&nbsp;lie</td>
          </tr>
          <tr>
          <td><Badge>{counts['p']}</Badge>&nbsp;pain</td>
          </tr>
          <tr>
          <td><Badge>{counts['q']}</Badge>&nbsp;question</td>
          </tr>
          <tr>
          <td><Badge>{counts['r']}</Badge>&nbsp;random feelings</td>
          </tr>
          <tr>
          <td><Badge>{counts['t']}</Badge>&nbsp;truth</td>
          </tr>
          <tr>
          <td><Badge>{counts['w']}</Badge>&nbsp;wild experiences</td>
          </tr>
        </tbody>
      </Table>
</div>
    )
  }
}
