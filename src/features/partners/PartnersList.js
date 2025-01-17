import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Partner from '../../components/Partner';
import { selectAllPartners } from './partnersSlice';

const PartnerList = () => {
    const partners = useSelector(selectAllPartners);
    console.log(partners);

    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) =>  state.partners.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
};

export default PartnerList;