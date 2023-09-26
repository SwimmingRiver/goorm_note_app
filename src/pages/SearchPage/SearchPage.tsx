import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { NoteCard } from "../../components";

const SearchPage = () => {
    const { title } = useParams();
    const searchOutput = useAppSelector((state) =>
        state.notesList.mainNotes.filter((v) => v.title === title)
    );

    return (
        <>
            {searchOutput.length === 0 ? (
                <h1>존재하는 검색결과가 없습니다.</h1>
            ) : (
                <div>
                    <h1>'{title}' 의 검색결과</h1>
                    {searchOutput.map((item) => (
                        <NoteCard key={item.id} note={item} type="note"/>
                    ))}
                </div>
            )}
        </>
    );
};

export default SearchPage;
