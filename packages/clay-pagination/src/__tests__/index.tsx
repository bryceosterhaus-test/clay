/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayPagination from '..';

describe('ClayPagination', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayPagination />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});