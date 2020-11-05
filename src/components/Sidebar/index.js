import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { openModule, toggleLesson } from '../../store/modules/course/actions';

import { Container } from './styles';

function Sidebar() {
  const { modules } = useSelector((state) => state.course);

  const dispatch = useDispatch();

  const handleOpenModule = (index) => {
    const newModules = modules;

    newModules[index].open = !newModules[index].open;

    dispatch(openModule(newModules));
  };

  return (
    <Container>
      {modules.map((module, index) => (
        <div className={'module ' + (module.open ? 'open' : '')} key={module.id}>
          <h3 className="module-title" onClick={() => handleOpenModule(index)}>
            {module.title}
            <span>{module.quantity} aulas </span>
          </h3>

          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id} onClick={() => dispatch(toggleLesson(module, lesson))}>
                {lesson.id}. {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}

export default Sidebar;
