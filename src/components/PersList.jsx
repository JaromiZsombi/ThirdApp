import { Button, Card } from 'reactstrap'
import { useState } from 'react'
import { MyModal } from './MyModal';


export const PersList = ({ pers, setPers }) => {
  console.log(pers)

  const [modal, setModal] = useState(false);
  const [selImg, setSelImg] = useState(null);
  const [selTitle, setSelTitle] = useState(null);

  const toggle = (img, title) => {
    setSelImg(img)
    setSelTitle(title)
    setModal(!modal)
  };

  const deleteObj = (id) => {
    setPers(prev => prev.filter(pers => pers.id != id))
  }

  return (
    <div className='d-flex flex-wrap justify-content-center gap-3'>
      {pers.map((obj) =>
        <Card style={{ padding: "2px" }} className='d-flex justify-content-center align-item-center flex-column gap-1' key={obj.id}>


          <img style={{ aspectRatio: "1/1", width: "300px", objectFit: "cover" }} src={obj.image} alt="Card image cap" onClick={()=>toggle(obj.image, obj.name)} />

          <h5>{obj.name}</h5>
          <Button onClick={() => deleteObj(obj.id)}>Delete</Button>
        </Card>


      )}
      {modal && <MyModal modal={modal} setModal={setModal} selImg={selImg} selTitle={selTitle}/>}
    </div>
  )
}