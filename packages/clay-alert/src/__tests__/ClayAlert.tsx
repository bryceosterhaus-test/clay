/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayAlert from '../ClayAlert';

describe('ClayAlert', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayAlert type="info" />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});