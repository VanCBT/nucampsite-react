import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) =>  state.comments.errMsg);


    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg}/>        
    ) : (    
        <Col md='5' className='m-1'>
            <h4>Comments</h4>
            {/* Corrected the ternary operator syntax */}
            {comments && comments.length > 0 ? (
                comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })
            ) : (
                <p>There are no comments for this campsite yet.</p>
            )}
            {/* Render the CommentForm and pass campsiteId as a prop */}
            <CommentForm campsiteId={campsiteId} />
        </Col>
    );
};

export default CommentsList;
