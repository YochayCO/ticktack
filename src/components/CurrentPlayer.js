import Switch from '@material-ui/core/Switch'

function CurrentPlayer({ currPlayer }) {
  return (
    <div className="CurrentPlayer">
      <Switch disabled checked={currPlayer === 1} />
    </div>
  );
}

export default CurrentPlayer;
