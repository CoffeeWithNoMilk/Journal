import React from 'react'
import {View, Text} from 'react-native'

export const horizontalCalendar = () => {

    //calender-type view
    const SelectedDay = ({ date, day }) => {
      return (
        <TouchableOpacity onPress={() => handleDayChange({ days, setDays })(day)}>
          <View style={selectedDayStyle} >
            <View style={{
              height: 10, backgroundColor: "green", width: '100%',
              alignSelf: "flex-end", flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10
            }} />
            <View style={{
              flex: 4,
              width: '100%',
              justifyContent: 'center',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10
            }}>
              <Text style={{ color: 'black', alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>
                {date}
              </Text>
              <Text style={{ color: 'black', alignSelf: 'center', fontSize: 14, fontWeight: '400', }}>
                {day}
              </Text>
            </View>
  
          </View>
        </TouchableOpacity>
      )
    }
  
    const NotSelectedDay = ({ date, day }) => {
      return (
        <TouchableOpacity onPress={() => handleDayChange({ days, setDays })(day)} >
          <View style={notSelectedDayStyle}>
            <Text style={{ color: 'white' }}>
              {date}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }
  
    //styles for calendar-type component
    const selectedDayStyle = {
      height: 70,
      width: 50,
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: 'white'
    }
  
    const notSelectedDayStyle = {
      backgroundColor: 'rgba(0,0,0,.5)',
      height: 50,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    }
  
    //State (stores and updates the value of day selected by user)
    const [days, setDays] = useState([
      { label: 'Sun', value: false },
      { label: 'Mon', value: true },
      { label: 'Tue', value: false },
      { label: 'Wed', value: false },
      { label: 'Thur', value: false },
      { label: 'Fri', value: false },
      { label: 'Sat', value: false },
    ]);
  
     //function
     const handleDayChange = ({ days, setDays }) => label => {
      const newDayState = days.map(day => {
        if (day.label === label) {
          return (day = { label: day.label, value: true })
        }
        return {
          label: day.label,
          value: false
        }
      })
      setDays(newDayState)
  
    }
    const [checkboxState, setCheckboxState] = useState(true);
  return (
    <View style={{
      height: '20%', flexDirection: 'row', justifyContent: 'center',
      alignItems: 'center', padding: 20
    }}>
      <View style={{
        //  backgroundColor: 'red',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center'
      }}>

        {days[0].value === true ? <SelectedDay date={1} day={'Sun'} /> :
          <NotSelectedDay date={1} day={'Sun'} />
        }

        {days[1].value === true ? <SelectedDay date={2} day={'Mon'} /> :
          <NotSelectedDay date={2} day={'Mon'} />
        }

        {days[2].value === true ? <SelectedDay date={3} day={'Tue'} /> :
          <NotSelectedDay date={3} day={'Tue'} />}

        {days[3].value === true ? <SelectedDay date={4} day={'Wed'} /> :
          <NotSelectedDay date={4} day={'Wed'} />}

        {days[4].value === true ? <SelectedDay date={5} day={'Thur'} /> :
          <NotSelectedDay date={5} day={'Thur'} />}

        {days[5].value === true ? <SelectedDay date={6} day={'Fri'} /> :
          <NotSelectedDay date={6} day={'Fri'} />}

        {days[6].value === true ? <SelectedDay date={3} day={'Sat'} /> :
          <NotSelectedDay date={7} day={'Sat'} />}


      </View>
    </View>
  )
}
