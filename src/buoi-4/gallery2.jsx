import { sculptureList } from "./data";
import { useState } from "react";

export function Gallery2() {
  let [sculpture, setSculpture] = useState(sculptureList[0]);

  return (
    <>
      <div>
        <img src={sculpture.url} width={100} />
        <p>description: {sculpture.name}</p>
        <p>name: {sculpture.description}</p>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sculptureList[0].name}</td>
            <td>{sculptureList[0].url}</td>
            <td>
              <button
                onClick={() => {
                  setSculpture(sculptureList[0]);
                }}
              >
                Select
              </button>
            </td>
          </tr>

          <tr>
            <td>{sculptureList[1].name}</td>
            <td>{sculptureList[1].url}</td>
            <td>
              <button
                onClick={() => {
                  setSculpture(sculptureList[1]);
                }}
              >
                Select
              </button>
            </td>
          </tr>

          <tr>
            <td>{sculptureList[2].name}</td>
            <td>{sculptureList[2].url}</td>
            <td>
              <button
                onClick={() => {
                  setSculpture(sculptureList[2]);
                }}
              >
                Select
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
