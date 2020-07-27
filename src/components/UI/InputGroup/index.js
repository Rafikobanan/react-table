import React from 'react';
import Input from '../Input';
import Button from '../Button';

const InputGroup = ({className = '', inputProps = {}, buttonProps = {}}) => (
	<div className={`input-group ${className}`}>
		<Input
			{...inputProps}
		/>
		<div className="input-group-append">
			<Button
				{...buttonProps}
			/>
		</div>
	</div>
);

export default InputGroup;