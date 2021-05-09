import React from 'react'
import usersData from '../../users/UsersData'

import {
  CCol,
  CSelect,
} from  '@coreui/react'

import {
  CIcon
} from '@coreui/icons-react'

const Item = (props) => {

  const item = props.item || null;

  return (
    <CCol className="mt-2 d-flex" lg={4}>
      <CSelect onChange={(e)=> {props.addWork(e.target.value, props.index)}} custom>
        <option value={item?.id? item.id : ''} selected>{item?.name ? item.name : 'Chọn công việc'}</option>
        {
          usersData.map((work, index) => {
            if (item && work.id === item.id) { return ''; }
            return (
              <option key={index} value={work.id}>{work.name}</option>
            )
          })
        }
      </CSelect>
      <CIcon className="mt-1 ml-2" name="cil-chevron-right" size="2xl" />
    </CCol>
  )

}

export default Item;
