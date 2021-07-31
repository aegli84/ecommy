import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({name, label, required}) => {
    const {control} =useFormContext();
    //const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
            defaultValue=""
            control={control}
            name={name}
            render={({ field }) => (
            <TextField
                {...field}
                name={name}
                label={label}
                required={required}
                fullWidth
            />
        )}
                // render={({ field }) => <TextField {...field} label={label} fullWidth required/>}  
                // control={control} 
                // name={name}
                // error={isError}
                // defaultValue=''
            />
        </Grid>
    )
}

export default FormInput;
