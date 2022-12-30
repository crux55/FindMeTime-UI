import { useState, useEffect } from 'react';

export function useFindFreeTime(tasks, goals) {

    const [timeSlot, setTimeSlot] = useState();

    /*
          {
            "title": this.state.title,
            "description": this.state.description,
            "duration": this.state.duration
          }
    */

    function find(){
        let hoursInAday= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        let blockers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 23]

        let freeSlots = hoursInAday.filter(o1 => !blockers.some(o2 => o1 === o2))
        let totalTime = 0

        tasks.forEach(element => {
            totalTime += element.duration
        });

        goals.forEach(element => {
            totalTime += element.duration
        })

        if(totalTime < freeSlots.length){
            return
        }

        const randomNumber = Math.floor(Math.random() * freeSlots.length);

        setTimeSlot(freeSlots[randomNumber])
    }
    useEffect(() => {
        find();
      }, [])
      
      return timeSlot;
}