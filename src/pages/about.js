import "../../node_modules/milligram/dist/milligram.css";
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const AboutPage = () => {
  let A = [
    [1, -1, 3],
    [2, 0, 1],
    [0, 2, -5],
  ];
  let B = [
    [1, 0, 1],
    [-1, 1, 3],
    [2, 4, 0],
  ];

  function matrix(A, B) {
    return A.map((row, i) =>
      B[0].map((_, j) => A[i].reduce((sum, _, n) => sum + A[i][n] * B[n][j], 0))
    );
  }

  return (
    <main>
      <title>About Me</title>
      <link
        rel="icon"
        href="https://image.flaticon.com/icons/png/512/5256/5256145.png"
      ></link>
      <h1>matrix multipliy</h1>
      <Link to="/">Home</Link>
      <div className="container">
        <table>
          <tbody>
            {matrix(A, B).map((row) => (
              <tr key={row.id}>
                {row.map((col) => (
                  <td key={col.id}>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

// Step 3: Export your component
export default AboutPage;
