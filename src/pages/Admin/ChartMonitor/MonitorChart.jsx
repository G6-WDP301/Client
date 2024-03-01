import { Grid, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { CHART_RANGE } from '../../utils/components/ChartTime';
import ChartSection from './ChartSection';
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const MonitorChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState(1800)

  const handleTimeRangeChange = event => {
    setSelectedTimeRange(event.target.value)
    return (
        <>
            <Grid container spacing={2} alignItems='center' sx={{ py: 3 }}>
                <Grid item xs={12} sx={{ py: 3 }}>
                  <Select
                    value={selectedTimeRange}
                    onChange={handleTimeRangeChange}
                    startAdornment={<AccessTimeIcon sx={{ mr: 1, color: 'orange' }} />}
                  >
                    {CHART_RANGE.map(chart => {
                      return (
                        <MenuItem key={chart.key} value={chart.key}>
                          {chart.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                </Grid>
                <Grid item xs={12} md={1212} sx={{ py: 3, paddingRight: 2 }}>
                  <ChartSection
                    metric='Metric'
                    timeRange={selectedTimeRange}
                    min={0}
                    max={100}
                    title='metric'
                    unit={'%'}
                  />
                </Grid>
              </Grid>
        </>
    );
}
}

export default MonitorChart;
