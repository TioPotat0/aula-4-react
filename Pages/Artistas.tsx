import * as React from 'react';
export default function Artistas() {
  let estilo = {color:"white"}
  return (
    
    <table>
    <tr style={estilo}>
      <th></th>
      <th>Artista 1</th>
      <th>Artista 2</th>
      <th>Artista 3</th>
      <th>Artista 4</th>
      <th>Artista 5</th>
      <th>Artista 6</th>
      <th>Artista 7</th>
      <th>Artista 8</th>
      <th>Artista 9</th>
      <th>Artista 10</th>
    </tr>
    <tr style={estilo}>
      <td>NOME</td>
      <td>felipe neto</td>
      <td>luan santana</td>
      <td>Celestino</td>
      <td>Nicolly</td>
      <td>lipezord</td>
      <td>Toronto</td>
      <td>Calvo</td>
      <td>Lina</td>
      <td>Jair</td>
      <td>Maikon</td>
    </tr>
    <tr style={estilo}>
      <td>IDADE</td>
      <td>14</td>
      <td>10</td>
      <td>16</td>
      <td>32</td>
      <td>2</td>
      <td>10</td>
      <td>16</td>
      <td>19</td>
      <td>16</td>
      <td>17</td>
    </tr>
    
  </table>

  );
}