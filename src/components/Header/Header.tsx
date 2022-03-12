import React, { FC, useState } from 'react';
import { style } from 'typestyle';
import { Button, Tooltip } from 'antd';
import {
  UnorderedListOutlined
} from '@ant-design/icons';

const styles = {
	header: style({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C4c4c4',
		height: 80,
	}),
	content: style({
		width: 1200,
    padding: '0 16px',
		display: 'flex',
		justifyContent: 'space-between'
	}),
	leftBar: style({
		display: 'flex'
	}),
	rightBar: style({
		display: 'flex'
	}),
}

type Props = {};

export const Header: FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return <div className={styles.header}>
		<div className={styles.content}>
			<div className={styles.leftBar}>
        <Tooltip title="search">
          <Button type="primary" shape="circle" onClick={() => setShowMenu(!showMenu)} icon={<UnorderedListOutlined />} />
        </Tooltip>
      </div>
      <div className={styles.rightBar}>

      </div>
		</div>
	</div>
}
