import React,{useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import samplePDF from '../../Resume-Document.pdf'
import './resume.css'
import {Container,Row,Col} from 'react-bootstrap'
import useWindowWidth from 'react-hook-use-window-width';

export default function Resume() {
    const[numPage,setNumPages] = useState(null);
    const[pageNumber,setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1)
      }
      const width = useWindowWidth();
      const widthSize=150%
      console.log(width)
  return (
    <Container>
        <Row>
        <Col/>
        <Col xs={8}>
            
             <div>
        <Document 
        file="/Resume-Document.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page
            width={width}
            pageNumber={pageNumber}
            />
        </Document>
       
</div>
             </Col>
        <Col/>
      </Row>
        
        
    </Container>
    
  );
}
