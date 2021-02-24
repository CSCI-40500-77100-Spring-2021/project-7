import React from "react";
import "./Display.css";

const Display = ({ keyword, setKeyword }) => {
  return (
      <div>
    <table border="1">
	<tbody>
		<tr>
			<td>
				<h2>
					Company Name:
				</h2>
			</td>
			<td>
				<h2>
					Apple Inc.
				</h2>
			</td>
		</tr>
		<tr>
			<td>
				<h2>
					Ticker Symbol:
				</h2>
			</td>
			<td>
				<h2>
					AAPL
				</h2>
			</td>
		</tr>
		<tr>
			<td>
				<h2>
					Current Stock price:
				</h2>
			</td>
			<td>
				<h2>
					$123.81
				</h2>
			</td>
		</tr>
	</tbody>
</table>
</div>

  );
};

export default Display;