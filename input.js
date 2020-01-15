let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(key) {

    const msgs = ['GG', 'GG NO RE', 'EZ CLAP', 'GIT GUD'];

    if (key === '1') {
      connection.write(`Say: ${msgs[0]}`)
    }

    if (key === '2') {
      connection.write(`Say: ${msgs[1]}`)
    }

    if (key === '3') {
      connection.write(`Say: ${msgs[2]}`)
    }

    if (key === '4') {
      connection.write(`Say: ${msgs[3]}`)
    }
    
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      connection.write('Move: up')
      // conn('Move: up');
    }

    if (key === 's') {
      connection.write('Move: down');
    }

    if (key === 'd') {
      connection.write('Move: right');
    }

    if (key === 'a') {
      connection.write('Move: left');
    }
  }
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = {
  setupInput
}