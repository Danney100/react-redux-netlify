import React from 'react'
import {Row, Col} from 'reactstrap'
import iconFolderImage from 'images/commonIcons/folder-image.svg'
import iconBigStock from 'images/commonIcons/bigstock.jpg'

const FileManager = () => {
  const Image = ({img, name, height, width}) => (
    <Col xs={6} sm={6} md={3} className="label text-center my-3 p-3 select-file">
      <img src={img} height={height} width={width} />
      <div>{name}</div>
    </Col>
  )

  return (
    <Row className="m-md-3 py-4 p-md-4 shadow-div">
      <Image img={iconFolderImage} name="New Folder(1)" height="39px" width="60px" />
      <Image img={iconFolderImage} name="New Folder(2)" height="39px" width="60px" />
      <Image img={iconFolderImage} name="New Folder(3)" height="39px" width="60px" />
      <Image img={iconFolderImage} name="New Folder(4)" height="39px" width="60px" />
      <Image img={iconBigStock} name="bigstock-Ankara-Turkey—… .jpg" height="84px" width="62px" />
      <Image img={iconBigStock} name="bigstock-Ankara-Turkey—… .jpg" height="84px" width="62px" />
      <Image img={iconBigStock} name="bigstock-Ankara-Turkey—… .jpg" height="84px" width="62px" />
      <Image img={iconBigStock} name="bigstock-Ankara-Turkey—… .jpg" height="84px" width="62px" />
    </Row>
  )
}

export default FileManager
