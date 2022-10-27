import { useDispatch, useSelector } from "react-redux"
import { setSelectAddress,selectAddressAlls } from '../../store/reducer/address';
import style from "./style/index.module.scss"
import { Tag, Radio, Modal, message } from 'antd';
import { setDefaultAddress } from "../../api/request"
import { useState } from "react";
export default function SelectAddressDialog() {
  const dispatch = useDispatch()
  const [isDelete,setIsDelete] = useState(false)
  const selectAddressDialog = useSelector(state => state.address.selectAddressDialog)
  const allAddress = useSelector(state => state.address.allAddress)
  const handleCancel = () => {
    dispatch(setSelectAddress(false))
  };
  const radioChange = async (e) => {
    if(isDelete){
      return
    }
    const {data:res}  = await setDefaultAddress(e.target.value)
    if(res.code!=200) return
    dispatch(selectAddressAlls())
    dispatch(setSelectAddress(false))
  }
  //删除收货地址
  const deleteAddress =async (e,addressId)=>{
    e.stopPropagation()
    setIsDelete(true)
    setIsModalOpen(true);
    console.log("addressId",addressId)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancels = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Modal title="选择收货地址" width={560} style={{ textAlign: "center" }} keyboard={false} maskClosable={false} footer={null} visible={selectAddressDialog} onCancel={handleCancel}>
      <div className={style.boxx}>
      {/* <h1>您还没有添加收货地址</h1> */}
      {!allAddress && <h1>您还没有添加收货地址</h1>}
          {allAddress?.length>0 && allAddress?.map(item => (
              <Radio.Group key={item.addressId} onChange={radioChange} className={style.radio}  value={item.type=='1'} size="large">
                <Radio.Button className={style.items} value={item.addressId}>
                  <div className={style.itemBox}>
                    <div className={style.name}><span className={style.default}>
                      {item.type == "1" && <Tag color="#CF0A2C" className={style.tag}>默认</Tag>}</span>
                      <span >收货人:</span>
                      <p>{item.name}</p>
                      <p> <Tag color="#CF0A2C" className={style.deleteAddress} onClick={(e)=>deleteAddress(e,item.addressId)}>删除</Tag></p>
                      </div>
                    <div className={style.phone}><span>联系电话:</span>{item.phone}</div>
                    <div className={style.detailAddress}><span>收货地址:</span>{item.detailAddress}</div>
                  </div>
                </Radio.Button>
              </Radio.Group>
            ))}
      </div>
    </Modal>
     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancels}>
     <p>Some contents...</p>
     <p>Some contents...</p>
     <p>Some contents...</p>
   </Modal>
   </>
  );
};
