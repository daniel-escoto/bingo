import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type { EditContestById, UpdateContestInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'



const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


type FormContest = NonNullable<EditContestById['contest']>

interface ContestFormProps {
  contest?: EditContestById['contest']
  onSave: (data: UpdateContestInput, id?: FormContest['id']) => void
  error: RWGqlError
  loading: boolean
}

const ContestForm = (props: ContestFormProps) => {
  const onSubmit = (data: FormContest) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.contest?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormContest> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.contest?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="textWord"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text word
        </Label>
        
          <TextField
            name="textWord"
            defaultValue={props.contest?.textWord}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="textWord" className="rw-field-error" />

        <Label
          name="maxEntries"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max entries
        </Label>
        
          <NumberField
            name="maxEntries"
            defaultValue={props.contest?.maxEntries}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="maxEntries" className="rw-field-error" />

        <Label
          name="numWinners"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Num winners
        </Label>
        
          <NumberField
            name="numWinners"
            defaultValue={props.contest?.numWinners}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="numWinners" className="rw-field-error" />

        <Label
          name="loserGets"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Loser gets
        </Label>
        
          <CheckboxField
            name="loserGets"
            defaultChecked={props.contest?.loserGets}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="loserGets" className="rw-field-error" />

        <Label
          name="startDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start date
        </Label>
        
          <DatetimeLocalField
            name="startDate"
            defaultValue={formatDatetime(props.contest?.startDate)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="startDate" className="rw-field-error" />

        <Label
          name="endDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End date
        </Label>
        
          <DatetimeLocalField
            name="endDate"
            defaultValue={formatDatetime(props.contest?.endDate)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="endDate" className="rw-field-error" />

        <Label
          name="enterMsg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Enter msg
        </Label>
        
          <TextField
            name="enterMsg"
            defaultValue={props.contest?.enterMsg}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="enterMsg" className="rw-field-error" />

        <Label
          name="winnerMsg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Winner msg
        </Label>
        
          <TextField
            name="winnerMsg"
            defaultValue={props.contest?.winnerMsg}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="winnerMsg" className="rw-field-error" />

        <Label
          name="loserMsg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Loser msg
        </Label>
        
          <TextField
            name="loserMsg"
            defaultValue={props.contest?.loserMsg}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="loserMsg" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContestForm
