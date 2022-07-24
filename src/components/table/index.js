import React from 'react';
import { Container, Body, TD, TH, Head, TR, Wrapper } from './styled';

export const TableData = ({ tableHeading, tableData }) => {
	return (
		<Wrapper>
			<Container>
				<Head>
					<TR>
						{tableHeading && tableHeading.map((item, index) => {
							return (
								<TH key={index}>{item}</TH>
							);
						})}
					</TR>
				</Head>
				<Body>
					{tableData && tableData.map((item, index) => {
						return (
							<TR key={index}>
								{item.id ? <TD>{item.id}</TD> : null}
								{item.name ? <TD>{item.name}</TD> : null}
								{item.phone ? <TD>{item.phone}</TD> : null}
								{item.username ? <TD>{item.username}</TD> : null}
								{item.email ? <TD>{item.email}</TD> : null}
								{item.website ? <TD>{item.website}</TD> : null}
							</TR>
						);
					}
					)}
				</Body>
			</Container>
		</Wrapper>
	);
};