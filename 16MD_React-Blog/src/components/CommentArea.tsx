import Button from './Button';
import TextArea from './TextArea';
export default function CommentArea () {
    return(
        <>
            <div>
                <TextArea
                    required={true}
                    label='Type your comment'
                    name='comment'
                    inputHandler={()=> ''}
                    rows={2}
                />
                <Button
                    label='Comment'
                    type='button'
                />
            </div>
        </>
    );
}