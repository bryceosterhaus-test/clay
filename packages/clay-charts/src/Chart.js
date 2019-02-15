/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import BillboardChart from 'react-billboardjs';
import GeoMap from './GeoMap';
import Predictive from './Predictive';
import React from 'react';

import {
	DEFAULT_COLORS,
	DEFAULT_GRID_OBJECT,
	DEFAULT_LINE_CLASSES,
	DEFAULT_POINT_PATTERNS,
} from './config';

/**
 * Chart component.
 * @param {Object} props
 * @return {ReactElement}
 */
export default function(props) {
	const {color, data, grid, line, point, ...otherProps} = props;

	let ChartComponent;

	switch (data.type) {
	case 'geo-map':
		ChartComponent = GeoMap;
		break;
	case 'predictive':
		ChartComponent = Predictive;
		break;
	default:
		ChartComponent = BillboardChart;
	}

	return (
		<ChartComponent
			{...otherProps}
			color={Object.assign({pattern: DEFAULT_COLORS}, color)}
			data={data}
			grid={Object.assign(DEFAULT_GRID_OBJECT, grid)}
			line={Object.assign({classes: DEFAULT_LINE_CLASSES}, line)}
			point={Object.assign(
				{
					pattern: DEFAULT_POINT_PATTERNS,
				},
				point
			)}
		/>
	);
}