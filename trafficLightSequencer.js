function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log('No phases found');
    return;
  }

  for (let i = 0; i < cycles; ++i) {
    for (const phase of config.phases) {
      if (config.fault === true) {
        console.log('Faulted phase!');
        return;
      }
      if (phase.duration <= 0) {
        console.log('Invalid phase detected');
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  let total = 0;

  for (let i = 0; i < cycles; ++i) {
    for (const phase of config.phases) {
      total += phase.duration;
      timeline.push(total);
    }
  }

  return timeline;
}
