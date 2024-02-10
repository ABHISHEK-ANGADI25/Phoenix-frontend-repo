import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import './BodyContent.css';
import Tabular from './Tabular';
import { Card } from '@mui/material';
import PackageDropDown from './PackageDropdowns';

const BodyContent = () => {

    return (
        <>
            <div >
                <div >
                </div>
                <div className='tagLine'>
                    <h1 className='typography'>
                        One adventure at a time
                    </h1>
                    <h1 className='typography-heading'>
                        DISCOVER
                    </h1>
                </div>
                <Tabular />
                <PackageDropDown/>
            </div>
        </>
    )
}

export default BodyContent;