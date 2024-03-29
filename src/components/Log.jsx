export default function Log({turns, players}) {
    return (
        <ol id="log">
            {turns.map(
                (turn) => <li key={`${turn.square.row}${turn.square.col}`}>
                    {players[turn.player]} selected {turn.square.row + 1},{turn.square.col + 1}
                </li>
            )}
        </ol>
    );
}