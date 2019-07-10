/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayCard, {ClayCardWithImage} from '../src';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {storiesOf} from '@storybook/react';

const contentImage = require('./static/content.svg');
const portletImage = require('./static/portlet.svg');

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayCheckboxWithState = (props: any) => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayForm.Checkbox
			checked={value}
			disabled={false}
			indeterminate={false}
			onChange={() => setValue(val => !val)}
		>
			{props.children}
		</ClayForm.Checkbox>
	);
};

const ClayCardWithImageAndState = (props: any) => {
	const [selected, setSelected] = React.useState<boolean>(false);

	return (
		<ClayCardWithImage
			{...props}
			onSelectChange={setSelected}
			selected={selected}
		/>
	);
};

storiesOf('ClayCard', module)
	.add('with folder card', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard horizontal>
					<ClayCard.Body>
						<div className="flex-col">
							<ClaySticker displayType="secondary" inline>
								<ClayIcon
									spritemap={spritemap}
									symbol="folder"
								/>
							</ClaySticker>
						</div>
						<div className="autofit-col autofit-col-expand autofit-col-gutters">
							<div className="autofit-section">
								<ClayCard.Description displayType="title">
									{'Very Large Folder'}
								</ClayCard.Description>
							</div>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
				<ClayCard horizontal selectable>
					<ClayCheckboxWithState>
						<ClayCard.Body>
							<div className="autofit-col">
								<ClaySticker displayType="secondary" inline>
									<ClayIcon
										spritemap={spritemap}
										symbol="folder"
									/>
								</ClaySticker>
							</div>
							<div className="autofit-col autofit-col-expand autofit-col-gutters">
								<ClayCard.Description displayType="title">
									{'Very Large Folder'}
								</ClayCard.Description>
							</div>
						</ClayCard.Body>
					</ClayCheckboxWithState>
				</ClayCard>
			</div>
		</div>
	))
	.add('with group', () => (
		<>
			<ClayCard.Group label="files">
				<ClayCard displayType="file">
					<ClayCard.AspectRatio className="card-item-first">
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClayIcon
								spritemap={spritemap}
								symbol="documents-and-media"
							/>
						</div>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
						>
							{'DOC'}
						</ClaySticker>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<section className="autofit-section">
								<ClayCard.Description displayType="title">
									{'deliverable.doc'}
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									{'Stevie Ray Vaughn'}
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Caption>
							</section>
						</div>
					</ClayCard.Body>
				</ClayCard>
				<ClayCard displayType="file" selectable>
					<ClayCard.AspectRatio className="card-item-first">
						<ClayCheckboxWithState>
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClayIcon
									spritemap={spritemap}
									symbol="documents-and-media"
								/>
							</div>
							<ClaySticker
								displayType="danger"
								position="bottom-left"
							>
								{'DOC'}
							</ClaySticker>
						</ClayCheckboxWithState>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<section className="autofit-section">
								<ClayCard.Description displayType="title">
									{'deliverable.doc'}
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									{'Stevie Ray Vaughn'}
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Caption>
							</section>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
			<ClayCard.Group label="images">
				<ClayCard displayType="image">
					<ClayCard.AspectRatio className="card-item-first">
						<img
							alt="thumbnail"
							className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
							src="https://via.placeholder.com/256"
						/>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
							shape="rounded"
						>
							<ClayIcon
								spritemap={spritemap}
								symbol="document-image"
							/>
						</ClaySticker>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description displayType="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</div>
					</ClayCard.Body>
				</ClayCard>
				<ClayCard displayType="image">
					<ClayCard.AspectRatio className="card-item-first">
						<img
							alt="thumbnail"
							className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
							src="https://via.placeholder.com/256"
						/>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
							shape="rounded"
						>
							<ClayIcon
								spritemap={spritemap}
								symbol="document-image"
							/>
						</ClaySticker>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description displayType="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
		</>
	))
	.add('ClayCardWithImage', () => (
		<div className="row">
			<div className="col-md-4">
				<h3>{'Selectable'}</h3>
				<ClayCardWithImageAndState
					description="Author Action"
					imageSrc="https://via.placeholder.com/256"
					label={{
						displayType: 'success',
						value: 'Approved',
					}}
					spritemap={spritemap}
					title="thumbnail_coffee.jpg"
				/>
			</div>

			<div className="col-md-4">
				<h3>{'Non-Selectable'}</h3>
				<ClayCardWithImage
					description="Author Action"
					imageSrc="https://via.placeholder.com/256"
					label={{
						displayType: 'success',
						value: 'Approved',
					}}
					spritemap={spritemap}
					title="thumbnail_coffee.jpg"
				/>
			</div>
		</div>
	))
	.add('with navigation card variant', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard interactive>
					<ClayCard.AspectRatio>
						<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
							<img alt="portlet image" src={portletImage} />
						</span>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Description displayType="title">
							{'Widget Page'}
						</ClayCard.Description>
						<ClayCard.Description displayType="text">
							{'Build a page by adding widgets and content.'}
						</ClayCard.Description>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
				<ClayCard interactive>
					<ClayCard.AspectRatio>
						<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
							<img alt="content image" src={contentImage} />
						</span>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Description displayType="title">
							{'Content Page'}
						</ClayCard.Description>
						<ClayCard.Description
							displayType="text"
							truncate={false}
						>
							{
								'This is an example of card-type-template using an anchor tag.'
							}
						</ClayCard.Description>
					</ClayCard.Body>
				</ClayCard>
			</div>
			<div className="col-md-4">
				<ClayCard interactive>
					<ClayCard.AspectRatio>
						<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
							<ClayIcon
								spritemap={spritemap}
								symbol="page-template"
							/>
						</span>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Description displayType="title">
							{'Blog'}
						</ClayCard.Description>
					</ClayCard.Body>
				</ClayCard>
			</div>
			<div className="col-md-4">
				<ClayCard horizontal interactive>
					<ClayCard.Body>
						<span className="autofit-col">
							<ClaySticker inline>
								<ClayIcon spritemap={spritemap} symbol="page" />
							</ClaySticker>
						</span>
						<span className="autofit-col autofit-col-expand">
							<span className="autofit-section">
								<ClayCard.Description
									displayType="title"
									truncate
								>
									{'Full Page Application'}
								</ClayCard.Description>
							</span>
						</span>
					</ClayCard.Body>
				</ClayCard>
			</div>
		</div>
	))
	.add('with user', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard displayType="user" selectable>
					<ClayCard.AspectRatio className="card-item-first">
						<ClayCheckboxWithState>
							<ClayCard.AspectRatio>
								<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
									<ClaySticker
										className="sticker-user-icon"
										displayType="secondary"
										shape="circle"
									>
										<ClayIcon
											spritemap={spritemap}
											symbol="user"
										/>
									</ClaySticker>
								</div>
							</ClayCard.AspectRatio>
						</ClayCheckboxWithState>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description displayType="title">
								{'Adélaide'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="warning">
									{'Rejected'}
								</ClayLabel>
							</ClayCard.Caption>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
				<ClayCard displayType="user">
					<ClayCard.AspectRatio className="card-item-first">
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClaySticker
								className="sticker-user-icon"
								displayType="secondary"
								shape="circle"
							>
								<ClayIcon spritemap={spritemap} symbol="user" />
							</ClaySticker>
						</div>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description displayType="title">
								{'Adélaide'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>
		</div>
	));
