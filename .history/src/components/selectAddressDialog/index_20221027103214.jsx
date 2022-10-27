import { useDispatch, useSelector } from "react-redux"
import { setSelectAddress,selectAddressAlls } from '../../store/reducer/address';
import style from "./style/index.module.scss"
import { Tag, Radio, Modal, message } from 'antd';
import { setDefaultAddress } from "../../api/request"
export default function SelectAddressDialog() {
  const dispatch = useDispatch()
  const selectAddressDialog = useSelector(state => state.address.selectAddressDialog)
  const allAddress = useSelector(state => state.address.allAddress)
  const handleCancel = () => {
    dispatch(setSelectAddress(false))
  };
  const radioChange = async (e) => {
    const {data:res}  = await setDefaultAddress(e.target.value)
    if(res.code!=200) return
    dispatch(selectAddressAlls())
    dispatch(setSelectAddress(false))
  }
  return (
    <Modal title="选择收货地址" style={{ textAlign: "center" }} keyboard={false} maskClosable={false} footer={null} visible={selectAddressDialog} onCancel={handleCancel}>
      <div className={style.boxx}>
      {/* <h1>您还没有添加收货地址</h1> */}
      {!allAddress && <h1>您还没有添加收货地址</h1>}
          {allAddress?.length>0 && allAddress?.map(item => (
              <Radio.Group key={item.addressId} onChange={radioChange} className={style.radio}  value={item.type=='1'} size="large">
                <Radio.Button className={style.items} value={item.addressId}>
                  <div className={style.itemBox}>
                  <div className={style.default}>{item.type == "1" && <Tag color="cyan" className={style.tag}>默认</Tag>}</div>
                    <div className={style.name}><span>收货人:</span><p>{item.name}</p> </div>
                    <div className={style.phone}><span>联系电话:</span>{item.phone}</div>
                    <div className={style.detailAddress}><span>收货地址:</span>{item.detailAddress}123123123123123131313</div>
                  </div>
                </Radio.Button>
              </Radio.Group>
            ))}
      </div>
    </Modal>
  );
};
