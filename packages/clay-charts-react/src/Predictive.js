import React from 'react';
import {isDefAndNotNull, isNumber} from 'metal';
import BillboardChart from 'react-billboardjs';

/**
 * Predictive Chart component.
 * @extends React.Component
 * @param {Object} props
 * @return {ReactElement}
 */
export default class PredictiveChart extends React.Component {
	/** @inheritdoc */
	constructor(props) {
		super(props);

		let columns = props.data.columns;

		if (isDefAndNotNull(columns)) {
			columns = columns.map(dataSeries => {
				if (dataSeries[0] !== 'x') {
					dataSeries = dataSeries.map(element => {
						return isNumber(element)
							? {
								low: element,
								mid: element,
								high: element,
							  }
							: element;
					});
				}

				return dataSeries;
			});
		}

		let predictionDate = props.predictionDate;
		let regions = [];

		if (isDefAndNotNull(predictionDate)) {
			regions.push({
				axis: 'x',
				start: predictionDate,
			});
		}

		this.state = {
			columns,
			regions,
		};
	}

	/** @inheritdoc */
	render() {
		const {columns, regions} = this.state;
		const {data, predictionDate, ...otherProps} = this.props;

		return (
			<BillboardChart
				data={{
					...data,
					columns,
				}}
				regions={regions}
				{...otherProps}
			/>
		);
	}
}
