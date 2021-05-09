import React, { useState, useEffect }from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCardFooter,
} from  '@coreui/react'

import {
  CIcon
} from '@coreui/icons-react'

import usersData from '../../users/UsersData'

import Item from './Item';

const Cards = () => {

  const [listSelect, setListSelect] = useState([]);
  const [count, setCount] = useState(0);
  const [works, setWorks] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const getData = () => {
      const productLine = JSON.parse(localStorage.getItem('productLine'));
      if (productLine[0]) {
        setWorks([...productLine]);
        setDisable(false);
      }
    }

    getData();
  }, [])

  const addWork = (value, index) => {
    const data = works;

    const item = usersData[value];
    if (!data[index]) {
      data.push(item);
      setWorks([...data]);
    } else {
      data[index] = item;
      setWorks([...data]);
    }
  }

  const setEditProLine = () => {

    const list =  works.map((item, index) => {
      return (<Item item={item} index={index} addWork={addWork} />);
    });

    setListSelect([...list]);
    setCount(list.length);
    setDisable(true);
  }

  const addProductLine = () => {
    setDisable(false);
    setCount(0);
    setListSelect([]);
    localStorage.setItem('productLine', JSON.stringify(works));
  }

  const removeAll = () => {
    localStorage.setItem('productLine', JSON.stringify([]));
    setListSelect([]);
    setWorks([]);
  }

  const addSelect = () => {
    let item = null;
    let ind = count;

    if ((ind+1) < usersData.length) {
      item = (<Item index={ind} addWork={addWork}  />);

      setCount(1+count);
      listSelect.push(item);
      setListSelect(listSelect);
    }
  }

  return (
    <>
      <CRow>
        <CCol lg="12" xs="12" sm="6" md="4">
          <CCard borderColor="primary">
            <CCardHeader>
              <CRow>
                <CCol xs={8} className="mt-2" >Công việc hôm nay</CCol>
                <CCol xs={4}>
                  <CButton
                    className="float-right"
                    color="success"
                    variant="outline"
                    onClick={setEditProLine}
                    disabled={disable}
                  >
                    <CIcon className="mt-1 mx-2" name="cil-pencil" size="lg" />
                    Sửa
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow>
                {
                  works.map((item, index) => {
                    return (
                      <CCol className="d-flex" key={index} lg="4" xs="12" sm="6" md="4">
                        <CCard key={index} color="primary" className="text-white w-100">
                          <CCardBody>
                            {item.name}
                          </CCardBody>
                        </CCard>
                        <CIcon className="mt-3 float-right" name="cil-chevron-right" size="2xl" />
                      </CCol>
                    )
                  })
                }
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={12} xs="12" sm="6" md="4">
          <CCard borderColor="primary">
            <CCardHeader>
            <CRow>
              <CCol xs={8} className="mt-2" >Khung tạo chuyền</CCol>
              <CCol xs={4}>
                <CButton
                  className="float-right"
                  color="success"
                  variant="outline"
                  disabled={!disable}
                  onClick={addSelect}
                >Thêm khung chọn</CButton>
              </CCol>
            </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow>
                {
                  listSelect.map((item) => {
                    return (item);
                  })
                }
              </CRow>
            </CCardBody>
            <CCardFooter>
            <CButton
                className="float-right mx-2"
                color="success"
                variant="outline"
                disabled={!disable}
                onClick={removeAll}
              >Làm mới</CButton>
              <CButton
                className="float-right"
                color="success"
                variant="outline"
                disabled={!disable}
                onClick={addProductLine}
              >Tạo chuyền</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Cards
