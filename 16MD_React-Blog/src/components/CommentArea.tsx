import Button from './Button';
import TextArea from './TextArea';

type TcommentAreaProps = {
    commentHandler:(val:string) => void
    clickHandler:() => void
}

export default function CommentArea ({commentHandler,clickHandler}:TcommentAreaProps) {
    return(
        <>
            <div>
                <TextArea
                    required={true}
                    label='Type your comment'
                    name='comment'
                    inputHandler={commentHandler}
                    rows={2}
                />
                <Button
                    label='Comment'
                    type='button'
                    onClick={clickHandler}
                />
            </div>
        </>
    );
}