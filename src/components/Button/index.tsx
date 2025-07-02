import './styles.css'

type Props = {
  label: string;
};

export function Button({label}: Props) {
    return(
        <button className='container'>
            <p>{label}</p>
        </button>
    )
}