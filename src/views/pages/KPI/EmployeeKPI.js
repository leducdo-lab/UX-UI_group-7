import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CDataTable,
  CBadge
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartPie,
} from '@coreui/react-chartjs'

import userKPIData from '../../users/UserKPIData'

const getBadge = status => {
  switch (status) {
    case 'Hoàn thành đúng tiến độ': return 'success'
    case 'Đang thực hiện': return 'secondary'
    case 'Chưa hoàn thành': return 'warning'
    case 'Hoàn thành trễ tiến độ': return 'danger'
    default: return 'primary'
  }
}
const table_fields = ['Tên công việc','Ngày giờ hoàn thành', 'Vị trí làm việc', 'Trạng thái']
const fields = ['name','registered', 'role', 'status']

const EmployeeKPI = () => {

  return (
    <CCardGroup>
       <CRow className="mt-5" style={{fontSize: '3rem', textAlign: 'center' }}>
            Tổng kết KPI của nhân viên 
        </CRow>
      <CCol sm="8" className="mx-auto mt-3">
        
        <CRow>
            Nhân viên: Nguyễn Văn A 
        </CRow>
        <CRow>
            ID nhân viên: HCL-07-01
        </CRow>
        <CRow >
            Bộ phận làm việc: Dây chuyền 01
        </CRow>
        
        <CCard className="mt-3">
            <CCardHeader>
              Bảng thống kê công việc của cá nhân
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={userKPIData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        
        <CCard className="mt-3">
        <CCardHeader>
          KPI tính theo hiệu quả công việc mỗi ngày
        </CCardHeader>
        <CCardBody>
           <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [80, 20, 70, 10]
              }
            ]}
            labels={['Chưa hoàn thành', 'Đang thực hiện', 'Hoàn thành đúng tiến độ', 'Hoàn thành trễ tiến độ']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
  
        <CCard>
            <CCardHeader>
            Kết quả đánh giá KPI trong tháng
            </CCardHeader>
            <CCardBody>
            <CChartBar
                datasets={[
                {
                    label: 'KPI tính trên số sản phẩm làm được',
                    backgroundColor: '#0000FF',
                    data: [40, 20, 12, 39, 10, 40, 39, 50, 40, 20, 12, 51, 32, 40, 39, 50, 40, 29, 32, 41, 62, 40, 39, 50, 40, 29, 32, 41, 62, 0]
                }
                ]}
                labels = {['1','2','3','4','5','6','7','8','9','10','11','12','13',
                '14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']}
                options={{
                tooltips: {
                    enabled: true
                }
                }}
            />
            </CCardBody>
        </CCard>
      </CCol> 
    </CCardGroup>
  )
}

export default EmployeeKPI